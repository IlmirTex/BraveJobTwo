function func(s, a, b) {

    if (s.match(/​$/)) { 
    r​eturn - 1;
    }

    let i = s.length - 1;
    let aIndex = bIndex = -1; 
       
    w​hile((aIndex == -1) && (bIndex =​= -1) && (i > 0)) {
        s.substring(i, i + 1) =​= a ? aIndex = i;
        s.substring(i, i + 1) =​= b ? bIndex = i;
        i--;
    }

    if (aIndex != -1) {
        bIndex != -1 ? aIndex : Math.max(aIndex, bIndex);
    }
    if (bIndex != -1) {
        return bIndex;
    }
    else {
        return -1;
    }
}


