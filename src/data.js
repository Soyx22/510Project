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

export const data = [new Item("chick"), new Item("mouse"), new Item("cream")];
