const domain = document.getElementById('domain');
const link_tags = document.querySelectorAll('.link');


domain.addEventListener('keyup', (event) => {
    link_tags[0].href = `https://www.google.com/search?q=site:*.${domain.value}`;
    link_tags[1].href = `https://www.google.com/search?q=site:*.*.${domain.value}`;
    link_tags[2].href = `https://www.google.com/search?q=site:*.${domain.value}+ext:php`;
    link_tags[3].href = `https://crt.sh/?q=%.${domain.value}`;
    link_tags[4].href = `https://yandex.com/search/?text=site%3A*.${domain.value}`;
    link_tags[5].href = `https://www.bing.com/search?q=site:${domain.value}`;
    link_tags[6].href = `https://github.com/search?q=%22%2A.${domain.value}%22&type=code`;
    link_tags[7].href = `https://www.shodan.io/search?query=ssl.cert.subject.CN%3A%22${domain.value}%22`;
    link_tags[8].href = `https://search.censys.io/search?resource=hosts&sort=RELEVANCE&per_page=25&virtual_hosts=INCLUDE&q=services.tls.certificates.leaf_data.names%3A+%27${domain.value}%27`;
    link_tags[9].href = `https://web.archive.org/cdx/search/cdx?url=*.${domain.value}/*&output=text&fl=original&collapse=urlkey`;
})