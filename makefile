TS_FILES := $(wildcard *.ts)
JS_FILES := $(patsubst %.ts, %.js, $(TS_FILES))

all: $(JS_FILES)

%.js: %.ts
	tsc && perl -spi.bak -e 's#Object\.defineProperty\(exports, "__esModule", { value: true }\);#// Object.defineProperty(exports, "__esModule", { value: true });#' $@

clean:
	rm -f $(JS_FILES)
