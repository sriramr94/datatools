import PyPDF2

def get_file(fname):
    pdfpath = fname
    pdfobj = open(pdfpath, 'rb')
    return pdfobj

def read_pdf(pdfobj):
    pdfread = PyPDF2.PdfFileReader(pdfobj)
    return pdfread

def convert_to_text(pdfread,textfile_name='pdf_to_text.txt'):
    for i in range(x):
        pageObj = pdfread.getPage(i)
        with open(textfile_name, 'a+') as f: 
            f.write((pageObj.extractText()))
    return textfile_name

fname = 'samplePdf1.pdf'
pdfobj = get_file(fname)
pdfread = read_pdf(pdfobj)
download_file = convert_to_text(pdfread)
print(download_file,'hello')

