package main

import (
	"context"
	"fmt"
	"strconv"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type ConversionResult struct {
	Hex   string `json:"hex"`
	Bin   string `json:"bin"`
	Dec   string `json:"dec"`
	Error string `json:"error"`
}

// Convert takes a value and its format ("hex", "bin", "dec") and returns it in all three formats.
func (a *App) Convert(value string, format string) ConversionResult {
	if value == "" {
		return ConversionResult{Error: "Empty input"}
	}
	var num int64
	var err error

	switch format {
	case "hex":
		num, err = strconv.ParseInt(value, 16, 64)
	case "bin":
		num, err = strconv.ParseInt(value, 2, 64)
	case "dec":
		num, err = strconv.ParseInt(value, 10, 64)
	default:
		return ConversionResult{Error: "Unknown format"}
	}

	if err != nil {
		return ConversionResult{Error: "Invalid input"}
	}

	return ConversionResult{
		Hex: fmt.Sprintf("%x", num),
		Bin: fmt.Sprintf("%b", num),
		Dec: fmt.Sprintf("%d", num),
	}
}
