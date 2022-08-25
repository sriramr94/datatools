from PyPDF2 import PdfFileReader

def get_file(fPath):
    pdfpath = fPath
    convertedResponse = ''
    with open(pdfpath, 'rb') as pdfobj:
       convertedResponse = read_pdf(pdfobj, fPath.replace('.pdf','.txt'))
    return convertedResponse

def read_pdf(pdfobj, fname):
    pdfread = PdfFileReader(pdfobj)
    return convert_to_text(pdfread, fname)

def convert_to_text(pdfread,textfile_name='pdf_to_text.txt'):
    x = pdfread.getNumPages()
    for i in range(x):
        pageObj = pdfread.getPage(i)
        with open(textfile_name, 'a+') as f: 
            f.write((pageObj.extractText()))
    responseFileName = textfile_name.split('/')
    return responseFileName[2] if len(responseFileName) > 1 else responseFileName[0]


