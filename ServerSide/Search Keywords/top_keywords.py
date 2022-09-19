import requests

def search_keyword(kw):
    url = 'https://google.com/complete/search?output=toolbar&gl=eg=&q='+str(kw)
    resp = requests.get(url)
    trend_keywords = []
    for ele in resp.text.split('<CompleteSuggestion><suggestion data='):
        if '<?xml version="1.0"?><toplevel>' not in ele:
            op = ele.replace('"/></CompleteSuggestion>','').replace('"','').replace('</toplevel>','')
            trend_keywords.append(op)
    return trend_keywords
