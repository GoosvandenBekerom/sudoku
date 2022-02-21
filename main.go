package main

import (
	"embed"
	"flag"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

var (
	//go:embed html
	files embed.FS
)

func main() {
	ip := flag.String("ip", "127.0.0.1", "host to run webserver on")
	port := flag.Int("port", 8080, "port to run webserver on")
	flag.Parse()

	mux := http.NewServeMux()
	mux.HandleFunc("/", serveSudoku)

	host := fmt.Sprintf("%s:%d", *ip, *port)
	log.Printf("Running on %s\n", host)
	http.ListenAndServe(host, mux)
}

func serveSudoku(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFS(files, "html/sudoku.html")
	if err != nil {
		handleError(w, 500, err)
		return
	}

	if err := tmpl.Execute(w, nil); err != nil {
		handleError(w, 500, err)
		return
	}
}

func handleError(w http.ResponseWriter, status int, err error) {
	log.Println(err)
	w.WriteHeader(status)
}
