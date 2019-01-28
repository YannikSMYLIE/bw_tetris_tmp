lib.nav = HMENU
lib.nav {
    wrap = <ul class="navbar-nav mr-auto">|</ul>

    1 = TMENU
    1 {
        expAll = 0
        noBlur = 1

        NO = 1
        NO {
            wrapItemAndSub = <li class="nav-item">|</li>
            ATagParams = class="nav-link"
        }

        ACT < .NO
        ACT {
            wrapItemAndSub = <li class="nav-item active">|</li>
        }

        CUR < .ACT
    }
}

lib.secondnav = HMENU
lib.secondnav {
    wrap = <ul>|</ul>
    special = directory
    special.value = {$lib.secondNavUid}

    1 = TMENU
    1 {

        expAll = 0
        noBlur = 1

        NO = 1
        NO {
            wrapItemAndSub = <li class="ml-2">|</li>
            ATagParams = class="text-muted"
        }
        ACT < .NO

        CUR < .ACT
    }
}