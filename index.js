async function generatePDF(inuut) {
  const { jsPDF } = window.jspdf;

  // Capture the webpage content using html2canvas
  const content = document.getElementById("content");
  const canvas = await html2canvas(content);

  // Get the image data from the canvas
  const imgData = canvas.toDataURL("image/png");

  // Create a new jsPDF instance
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  // Add the image to the PDF
  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

  // Download the PDF
  pdf.save("webpage.pdf");
}
generatePDF("https://www.myiqa.org/");
