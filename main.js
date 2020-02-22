function Bold(){

  
    if ( document.getElementById("texto").style.fontWeight  == "bold") {
          document.getElementById("texto").style.fontWeight  = 'normal'
    }
    else {
        document.getElementById("texto").style.fontWeight  = "bold" ;
    }
}

function italics(){

  
    if ( document.getElementById("texto").style.fontStyle  == "italic") {
          document.getElementById("texto").style.fontStyle  = 'normal'
    }
    else {
        document.getElementById("texto").style.fontStyle  = "italic" ;
    }
}


function underline(){

  
    if ( document.getElementById("texto").style.textDecoration  == "underline") {
          document.getElementById("texto").style.textDecoration  = 'none'
    }
    else {
        document.getElementById("texto").style.textDecoration  = "underline" ;
    }
}

function sizetext()   {
    if(document.getElementById("fontSizeDD").value == "20px")
    {
        document.getElementById("texto").style.fontSize  = '20px';

    }
    else if(document.getElementById("fontSizeDD").value == "30px")
    {
        document.getElementById("texto").style.fontSize  = '30px';

    }
    else if(document.getElementById("fontSizeDD").value == "40px")
    {
        document.getElementById("texto").style.fontSize  = '40px';

    }
}

function sizetype()   {
    if(document.getElementById("fonttype").value == "Arial")
    {
        document.getElementById("texto").style.fontFamily  = 'Arial';

    }
    else if(document.getElementById("fonttype").value == "Geneva")
    {
        document.getElementById("texto").style.fontFamily  = 'Geneva';

    }
    else if(document.getElementById("fonttype").value == "Verdena")
    {
        document.getElementById("texto").style.fontFamily  = 'Verdena';

    }
}