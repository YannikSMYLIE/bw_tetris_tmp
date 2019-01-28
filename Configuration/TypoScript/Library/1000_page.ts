page = PAGE

page {
    # Template
    typeNum=0
    10 = FLUIDTEMPLATE
    10 {
        format = html

        layoutRootPaths {
            0 = EXT:bw_tetris_tmp/Resources/Private/Layouts/
        }

        partialRootPaths {
            0 = EXT:bw_tetris_tmp/Resources/Private/Partials/
        }

        templateRootPaths {
            0 = EXT:bw_tetris_tmp/Resources/Private/Templates/
        }

        # Layouts
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            # Default Layout
            default = TEXT
            default.value = Start

            # Benutzer waehlen
            pagets__2 = TEXT
            pagets__2.value = SelectUser

            # Sonst
            pagets__1 < .default
        }


        # Fehlerausgabe
        config.contentObjectExceptionHandler = 0

        # Ausgabe
        variables {
            content_main < styles.content.get
            content_main.select.where = colPos = 0
        }
    }

    # META
    meta {
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1

        viewport = width=device-width, initial-scale=1
    }
}