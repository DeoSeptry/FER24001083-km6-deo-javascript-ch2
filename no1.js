function changeWord(selectedText, changedText, text) {
  console.log(selectedText.trim());
  if (typeof changedText == "string" && typeof selectedText == "string") {
    // "    pantai"
    // "pantai"
    const textTrim = selectedText.trim().toLowerCase();
    if (textTrim == "") return "string hanya spasi kosong";
    // "   pantai" "pantai"
    // "membenci"
    // pemandangan di pantai sangat indah di sore hari

    const textSplit = text.split(" ");
    console.log("split ", text.split(" "));
    if (
      textSplit.filter((e) => {
        return e.toLowerCase() === textTrim;
      }).length === 0
    )
      return "TIDAK ADA KATA YANG DIGANTI";
    // return ["FEJS", "FEJS" ]
    // if(text.split(" "))
    console.log("text ", textTrim);
    console.log("cnage ", changedText.toLowerCase());
    const textBaru = text.toLowerCase().replaceAll(textTrim, changedText);

    return textBaru;
  }
  return "aww salah";
}
const kalimat1 = "Pemandangan FEJS di pantai sangat indah di sore hari FEJS";

console.log(changeWord("fejs", "membenci", kalimat1));
