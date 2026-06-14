function analyze() {
    const text = document.getElementById("research").value;
    const result = document.getElementById("result");

    if (text.trim() === "") {
        result.innerHTML = "Please enter some research text.";
        return;
    }

    const words = text.split(/\s+/).length;

    result.innerHTML = `
        <strong>Analysis Complete</strong><br>
        Total Words: ${words}<br>
        Status: Research content detected.<br>
        Ready for AI processing.
    `;
}
