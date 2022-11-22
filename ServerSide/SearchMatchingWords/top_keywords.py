import requests
import xml.etree.ElementTree as ET
def search_keyword(kw):
    url = 'https://google.com/complete/search?output=toolbar&gl=eg=&q='+str(kw)
    resp = requests.get(url)
    mytree = ET.fromstring(resp.content)
    trend_keywords = []
    for ele in list(mytree):
        trend_keywords.append(ele[0].attrib['data'])
    return trend_keywords
