const capitalize = (string) => {
    return string.at(0).toUpperCase() + string.substring(1);
}

const download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

const text = document.querySelector("textarea");

document.getElementById("save-text-file")
    .addEventListener("click", () => {
        download("text.txt", text.value);
    });

document.getElementById("upper-case")
    .addEventListener("click", () => {
        text.value = text.value.toUpperCase();
    });

document.getElementById("lower-case")
    .addEventListener("click", () => {
        text.value = text.value.toLowerCase();
    });

document.getElementById("proper-case")
    .addEventListener("click", () => {
        const words = text.value.toLowerCase().split(' ');
        let temp = "";
        for (const w of words) {
            temp += capitalize(w) + " ";
        }
        text.value = temp.trimEnd();
    });

document.getElementById("sentence-case")
    .addEventListener("click", () => {
        const words = text.value.toLowerCase().split(' ');
        let result = "";
        for (let i = 0; i < words.length; i++) {
            if (i === 0) {
                result += capitalize(words[i]) + " ";
            } else {
                const lastWord = words[i - 1];

                if (lastWord.at(-1) === '.') {
                    result += capitalize(words[i]) + " ";
                } else {
                    result += words[i] + " ";
                };
            };
        }
        text.value = result.trimEnd();
    });