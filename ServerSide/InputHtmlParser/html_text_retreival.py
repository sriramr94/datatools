#################################################################
##### File Name : html_text_retrieval.py                      ###
##### Description :Getting Clean text from HTML/Url           ###
##### Updated : 07/07/2022                                    ###
##### Author : Sriram Ravichandran                            ###
#################################################################
import requests,re

#html parser
def parse_html(content):
    """
    This function gets the content of the HTML, does the parsing and
    removes irrelavant items w.r.t to clean text and returns almost
    a pure text
    :param content:
    :return:
    """
    from bs4 import BeautifulSoup
    from bs4.element import Comment
    soup = BeautifulSoup(content, 'html.parser')
    text_elements = soup.findAll(text=True)
    tag_blacklist = ['style', 'script', 'head', 'title', 'meta', '[document]','img']
    clean_text = []
    for element in text_elements:
        if element.parent.name in tag_blacklist or isinstance(element, Comment):
            continue
        else:
            text_ = element.strip()
            clean_text.append(text_)
    result_text = " ".join(clean_text)
    result_text = result_text.replace(r'[\r\n]','')
    tag_remove_pattern = re.compile(r'<[^>]+>')
    result_text = tag_remove_pattern.sub('', result_text)
    result_text = re.sub(r'\\','',result_text)
    return result_text

def url_request(url):
    """
    This function accepts the url as the arg and does the request inorder
    to get the response content and forwards to parse_html function to get
    the clean text
    :param url:
    :return:
    """
    try:
        obtained_url = url
        bot_header = {'User-agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.45 Safari/537.36'}
        response = requests.get(obtained_url,headers=bot_header,timeout=10)
        html_content = parse_html(response.content)
        return html_content
    except Exception as e:
        return 'Error '+str(e)


def html_request(h_file):
    """
    This function accepts the HTML file as the arg and do the request inorder
    to get the response content and forwards to parse_html function to get
    the clean text
    :param h_file:
    :return:
    """
    try:
        # if h_file.endswith('html'):
        #     with open(h_file, "r", encoding='utf-8') as f:
        #         print("inside file open block")
        #         html_file = f.read()
        html_content = parse_html(h_file)
        return html_content
        #else:
            #return 'Wrong File Format/Pls upload only Html files'
    except Exception as e:
        return 'Error ' + str(e)

