import requests
from bs4 import BeautifulSoup
from requests.models import Response
import sqlite3
import json

class inf_manument():
    def __init__(self, id , name, email, sites, phone_nums, operating_modes, locations, description_full, description_mas, **kwargs):
        self.id = id
        self.name_of_manument = name
        self.email = email
        self.sites = sites
        self.phone_nums = phone_nums
        self.operating_modes = operating_modes
        self.locations = locations
        self.description_full = description_full
        self.description_mas = description_mas

# class PersonEncoder(json.JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj, inf_manument):
#             return obj.__dict__
#         return json.JSONEncoder.default(self, obj)

class mainApp():
    def __init__(self):
        global names, address, descriptions,img, url_img, text, url_pam
        text = []

        url = 'https://visit-kaluga.ru/routes/Kolybel-kosmonavtiki/'
        url_pam = ['https://visit-kaluga.ru/catalog/entry/monument-600-letiyu-kalugi/', 'https://visit-kaluga.ru/catalog/entry/skver-mira/', 'https://visit-kaluga.ru/catalog/entry/skulpturnaya-kompoziciya-vstrecha-korolyova-i-ciolkovskogo/', 'https://visit-kaluga.ru/catalog/entry/dom-muzej-k-e-ciolkovskogo/', 'https://visit-kaluga.ru/catalog/entry/park-ciolkovskogo/', 'https://visit-kaluga.ru/catalog/entry/raketa-nositel-quot-vostok-quot/', 'https://visit-kaluga.ru/catalog/entry/muzej-kosmonavtiki/', 'https://visit-kaluga.ru/catalog/entry/planetarij/', 'https://visit-kaluga.ru/catalog/entry/dom-muzej-chizhevskogo/', 'https://visit-kaluga.ru/catalog/entry/pamyatnik-ciolkovskomu-v-borovske/', 'https://visit-kaluga.ru/catalog/entry/pamyatnik-n-f-fyodorovu-v-borovske/', 'https://visit-kaluga.ru/catalog/entry/muzej-kvartira-k-e-ciolkovskogo/']
        url_img = ['https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_77404bc3cf479cd99af62723e527f89d.jpg?1577260564', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_cc1488c8442fa354ec9efb689a8004a4.jpg?1594361657','https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_51887a09ca6e1924dbefeb47700068d9.jpg?1577261351',  'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b4643a2820539a50543d83b7ae6fef85.jpg?1577261836', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_f2d1d115d3e7c794c7419ff29ed54f64.jpg?1577262291', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b21e457608f6a43daaca6c1c93a38cfd.jpg?1577262747', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_caef67d1c3e276a60f1f3dfcda541767.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9874f9c1f224066b4cf16474c29c0ccd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9d67e36f1dcfb673c771c3b078b160fd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_70c106fddec306ccbaf3b4ef80498288.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_1aa910889ef442594aa99d5e081023a0.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_2fbf45cf179665183951e35eb6184389.jpg?1577265735']
        
        response = requests.get(url, stream=True)
        soup = BeautifulSoup(response.text, 'lxml')

        names = soup.find_all('div', class_= 'route-point__title')
        address = soup.find_all('div', class_= 'route-point__address')
        descriptions = soup.find_all('div', class_= 'route-point__description')
        img = soup.find_all('img')


    def name(self, i):
        return (names[i].text).replace('\n', '')

    def addres(self, i):
        return (((address[i].text).replace('\r', '')).replace('\n', '')).replace('   ', '')

    def description(self, i):
        return descriptions[i].text

    def description_full(self, i):
        response_time = requests.get(url_pam[i], stream=True)
        soup = BeautifulSoup(response_time.text, 'lxml')
        v = soup.find('div', class_='page-content catalog-entry__content users-html')
        return ((v.text).replace('\n', '')).replace('\xa0', ' ')

    def operationg_model(self, i):
        # def get_name(i):
        #     name = (self.name(i)+ '1' + ".txt")
        #     name = name.replace('\n', '')
        #     return name

        if i == 12:
            return ['']
        response_time = requests.get(url_pam[i], stream=True)
        soup = BeautifulSoup(response_time.text, 'lxml')
        v = soup.find('div', class_='aside-block__content')

        return (((v.text).replace('\n', '|')).replace('||', '|')).replace('||', '|')

        # file = open(get_name(i), 'w')
        #
        # for part in text:
        #     file.write(part)


    def file_text(self):
        def get_name(i):
            name = (self.name(i) + ".txt")
            name = name.replace('\n', '')
            return name

        for i in range(13):
            file = open(get_name(i), 'w')
            text = (self.name(i).replace('\n', '') + " " + (self.addres(2).replace('  ', '')).replace('\n','') + ' ' + self.description(i).replace('\n', ''))
            for part in text:
                file.write(part)

    def img(self, i = 0):
        def get_name(i):
            name = (self.name(i) + ".jpeg")
            name = name.replace('\n', '')
            return name       
        
        def save_data(name, file_data):
            file = open(name, 'bw')
            for chunk in file_data.iter_content(4096):
                file.write(chunk)

        def get_file(url_img):
            response_img = requests.get(url_img, stream=True)
            return response_img
            
        for name in url_img:           
            save_data(get_name(i), get_file(name))  
            i+=1                                    

# w = mainApp()
# d = []
# for i in range(12):
#     d.append(w.operationg_model(i))
#     print(d)

con = sqlite3.connect("hacaton.db")

cursoring = con.cursor()

cursoring.execute("""CREATE TABLE IF NOT EXISTS datahacaton(
    location VARCHAR(200),
    operating_mode VARCHAR(200),
    price_tiket INT,
    phone_num INT,
    site VARCHAR(100),
    email VARCHAR(100)
)""")

con.commit()
data = mainApp()



description_mas = []
description_fulls = []
locations = []
operating_modes = []
phone_nums = []
sites = []
email = []
name_of_manument = []
manument =[]
manument2 = {}

url_image = ['https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_77404bc3cf479cd99af62723e527f89d.jpg?1577260564', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_cc1488c8442fa354ec9efb689a8004a4.jpg?1594361657','https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_51887a09ca6e1924dbefeb47700068d9.jpg?1577261351',  'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b4643a2820539a50543d83b7ae6fef85.jpg?1577261836', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_f2d1d115d3e7c794c7419ff29ed54f64.jpg?1577262291', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b21e457608f6a43daaca6c1c93a38cfd.jpg?1577262747', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_caef67d1c3e276a60f1f3dfcda541767.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9874f9c1f224066b4cf16474c29c0ccd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9d67e36f1dcfb673c771c3b078b160fd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_70c106fddec306ccbaf3b4ef80498288.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_1aa910889ef442594aa99d5e081023a0.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_2fbf45cf179665183951e35eb6184389.jpg?1577265735']

for i in range(12):
    description_fulls.append(data.description_full(i))

    description_mas.append(data.description(i))

    locations.append(data.addres(i))

    name_of_manument.append(data.name(i))
    #print(locations)

    c = (data.operationg_model(i)).split('|')

    try:
        operating_modes.append(c[c.index(('Режим работы:'))+1])
    except ValueError:
        operating_modes.append('')

    try:
        phone_nums.append(c[(c.index('Телефон:'))+1])
    except ValueError:
        phone_nums.append('')

    try:
        email.append(c[(c.index('E-mail:'))+1])
    except ValueError:
        email.append('')

    try:
        sites.append(c[(c.index('Сайт:'))+1])
    except ValueError:
        sites.append('')

data.img()

for i in range(len(name_of_manument)):
    manument.append(inf_manument(i, name_of_manument[i], email[i], sites[i], phone_nums[i], operating_modes[i], locations[i], description_fulls[i], description_mas[i]))
for i in range(len(name_of_manument)):
    manument2[i] = i, name_of_manument[i], email[i], sites[i], phone_nums[i], operating_modes[i], locations[i], description_fulls[i], description_mas[i], url_image[i]


#print(name_of_manument[4].description_full)

to_json = json.dumps(manument2, ensure_ascii=False)
print(to_json)

# cursoring.execute("SELECT location FROM datahacaton")
# # if cursoring.fetchone() is None:
# cursoring.execute("INSERT INTO datahacaton VALUES(?, ?, ?, ?, ?, ?)", (locations, operating_modes, phone_nums, sites, email))
# con.commit()
# # else:
# #     print("Такой запись уже существует!")
# for value in cursoring.execute('SELECT * FROM datahacaton'):
#     print(value[0])
