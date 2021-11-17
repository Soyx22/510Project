class Item {
  constructor(item, translate, english = true, transcribe = "t&#390;&#388;") {
    this.key = item.toLowerCase().trim();
    this.translate =
      translate || item.split("").reverse().join("").toLowerCase().trim();
    this.text = item.toLowerCase().trim();
    this.value = this.text + "_" + this.translate;
    this.english = english;
    this.transcribe = transcribe;
  }
}

export const data = [new Item("bag","àpò","true","/bAg/"), new Item("àpò","bag","false","/bAg/");
                     new Item("table","tábílì","true","/teɪbl/"), new Item("tábílì","table","false","/ta:bi:li/"); 
                     new Item("bag","àpò","true","/bAg/"), new Item("àpò","bag","false","/a:po/"); 
                     new Item("chair","Ìjóòkó","true","/tʃer/"), new Item("Ìjóòkó","chair","false","/i:joo:ko/");
                     new Item("ceiling fan","Àìpê àjà","true","/siːlɪŋ fæn/"), new Item("Àìpê àjà","ceiling fan","false","/fæn/");
                     new Item("knife","Òbê","true","/naɪf/"), new Item("Òbê","knife","false","/naɪf/");
                     new Item("spoon","Síbí","true","/spuːn/"), new Item("Síbí","spoon","false","/spuːn/");
                     new Item("television","Amóhùn-máwòrán","true","/telɪvɪʒn/"), new Item("Amóhùn-máwòrán","television","false","/telɪvɪʒn/");
                     new Item("speaker","Agbóhùnsókè","true","/spiːkər/"), new Item("Agbóhùnsókè","speaker","false","/spiːkər/");
                     new Item("mirror","Dígí","true","/mɪrər/"), new Item("Dígí","mirror","false","/mɪrər/");
                     new Item("bucket","Awôn Garawa","true","/bʌkɪt/"), new Item("Awôn Garawa","bucket","false","/bʌkɪt/");
                     new Item("broom","ìgbálẹ̀","true","/bruːm/"), new Item("ìgbálẹ̀","broom","false","/bruːm/");
                     new Item("carpet","kápẹ́ẹ̀tì","true","/kɑːrpɪt/"), new Item("kápẹ́ẹ̀tì","carpet","false","/kɑːrpɪt/");
                     new Item("mat","ẹní","true","/ẹní/"), new Item("ẹní","mat","false","/ẹní/"); 
                     new Item("fridge","fìríìjì","true","/frɪdʒ/"), new Item("fìríìjì","fridge","false","/frɪdʒ/"); 
                     new Item("pot","Ìkòkò","true","/pɑːt/"), new Item("Ìkòkò","pot","false","/pɑːt/");
                     new Item("blanket","Aso ìbora","true","/blæŋkɪt/"), new Item("Aso ìbora","blanket","false","/blæŋkɪt/");
                     new Item("bolt","bólútì","true","/bəʊlt/"), new Item("bólútì","bolt","false","/bəʊlt|/");
                     new Item("bottle","Ìgò","true","/bɑːtl/"), new Item("Ìgò","bottle","false","/bɑːtl/");
                     new Item("box","Àpótí","true","/bɑːks/"), new Item("Àpótí","box","false","/bɑːks/");
                     new Item("brick","Òkúta","true","/brɪk/"), new Item("Òkúta","brick","false","/brɪk/");
                     new Item("bookcase","Àpò ìwé","true","/bʊkkeɪs/"), new Item("Àpò ìwé","bookcase","false","/bʊkkeɪs/");
                     new Item("kernel","Èkùró","true","/kɜːrnl/"), new Item("Èkùró","kernel","false","/kɜːrnl/");
                     new Item("garbage","Ìdòtí","true","/ɡɑːrbɪdʒ/"), new Item("Ìdòtí","garbage","false","/ɡɑːrbɪdʒ/"); 
                     new Item("foam","Fóómù","true","/fəʊm/"), new Item("Fóómù","foam","false","/fəʊm/"); 
                     new Item("night-dress","Aso Ilé","true","/naɪtdres/"), new Item("Aso Ilé","night-dress","false","/naɪtdres/"); 
                     new Item("bag","Àpò","true","/bæɡ/"), new Item("Àpò","bag","false","/bæɡ/");
                     new Item("book","Ìwé","true","/bʊk/"), new Item("Ìwé","book","false","/bʊk/");
                     new Item("blender","Ìdàpòmóra","true","/blendər/"), new Item("Ìdàpòmóra","blender","false","/blendər/");
                     new Item("container","Àwòn àpótí","true","/kənˈteɪnər/"), new Item("Àwòn àpótí","container","false","/kənˈteɪnər/");
                     new Item("camera","Ayàwòrán","true","/kæmərə/"), new Item("Ayàwòrán","camera","false","/kæmərə/");
                     new Item("hammer","Òòlù","true","/bæɡ/"), new Item("Òòlù","hammer","false","/bæɡ/");
                     new Item("hearth","Àìsun","true","/hɑːrθ/"), new Item("Àìsun","hearth","false","/hɑːrθ/");
                     new Item("grain","Okà","true","/ɡreɪn/"), new Item("Okà","grain","false","/ɡreɪn/");
                     new Item("hat-stand","Àgbékó Fìlà","true","/hætstænd/"), new Item("Àgbékó Fìlà","hat-stand","false","/hætstænd/"
                     new Item("pen","Gègé Ìkòwé","true","/pen/"), new Item("Gègé Ìkòwé","pen","false","/pen/");
                     new Item("hair-dryer","Èro Ìgbe’run","true","/pherdraɪər/"), new Item("Èro Ìgbe’run","hair-dryer","false","/herdraɪər/");
                     new Item("headphone","Àgbékórí","true","/hedˌfəʊn/"), new Item("Àgbékórí","headphone","false","/hedˌfəʊn/");
                     new Item("ice-cream","Wàrà Dídì","true","/aɪs ˈkriːm/"), new Item("Wàrà Dídì","ice-cream","false","/aɪs ˈkriːm/");
                     new Item("jar","Ide","true","/dʒɑːr/"), new Item("Ide","jar","false","/dʒɑːr/");























