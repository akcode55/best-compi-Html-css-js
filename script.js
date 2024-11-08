// تهيئة CodeMirror للمحرر
const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "htmlmixed",
    theme: "material-darker",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    tabSize: 2,
    indentWithTabs: true
});

function runCode() {
    const htmlCode = editor.getValue();  // استخدام CodeMirror للحصول على الكود
    const outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode);
    outputFrame.close();
}

function resetEditor() {
    editor.setValue('');  // إعادة تعيين الكود في المحرر
    runCode();
}

function home() {
    window.location.href = '/';  // توجيه المستخدم إلى الصفحة الرئيسية
}

function toggleEditorSize() {
    const editorContainer = document.querySelector('.container');
    if (editorContainer.style.height === '100%') {
        editorContainer.style.height = '80%';
    } else {
        editorContainer.style.height = '100%';
    }
}

function loadFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        editor.setValue(e.target.result);  // تحميل الملف إلى المحرر
        runCode();
    };
    reader.readAsText(file);
}
