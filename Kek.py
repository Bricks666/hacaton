import requests
from bs4 import BeautifulSoup
from requests.models import Response

class mainApp():
    def __init__(self):
        global names, address, descriptions,img, url_img

        url = 'https://visit-kaluga.ru/routes/Kolybel-kosmonavtiki/'
        url_img = ['https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_77404bc3cf479cd99af62723e527f89d.jpg?1577260564', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_cc1488c8442fa354ec9efb689a8004a4.jpg?1594361657','https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_51887a09ca6e1924dbefeb47700068d9.jpg?1577261351',  'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b4643a2820539a50543d83b7ae6fef85.jpg?1577261836', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_f2d1d115d3e7c794c7419ff29ed54f64.jpg?1577262291', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b21e457608f6a43daaca6c1c93a38cfd.jpg?1577262747', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_caef67d1c3e276a60f1f3dfcda541767.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9874f9c1f224066b4cf16474c29c0ccd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_9d67e36f1dcfb673c771c3b078b160fd.jpg?1577263555', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_70c106fddec306ccbaf3b4ef80498288.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_1aa910889ef442594aa99d5e081023a0.jpg?1577264936', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_2fbf45cf179665183951e35eb6184389.jpg?1577265735', 'https://visit-kaluga.ru/uploads/styles/point-list-image/points_of_routes_b8117f0a51f7431cbd4a8e6e22f92d67.jpg?1577265735']
        
        response = requests.get(url, stream=True)
        soup = BeautifulSoup(response.text, 'lxml')

        names = soup.find_all('div', class_= 'route-point__title')
        address = soup.find_all('div', class_= 'route-point__address')
        descriptions = soup.find_all('div', class_= 'route-point__description')
        img = soup.find_all('img')


    def name(self, i):
        return names[i].text

    def addres(self, i):
        return address[i].text

    def description(self, i):
        return descriptions[i].text
    
    def file_text(self):
        def get_name(i):
            name = (self.name(i) + ".txt")
            name = name.replace('\n', '')
            return name 

        for i in range (13):
            file = open(get_name(i), 'w')
            text = (self.name(i).replace('\n', '') + " " + (self.addres(2).replace('  ', '')).replace('\n', '') + ' ' + self.description(i).replace('\n', ''))
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

clas = mainApp()
while True:
    fun = input()

    if fun == 'description':
        clas.description()
    elif fun == 'addres':
        clas.addres()
    elif fun == 'name':
        clas.name()     
    elif fun == 'img':
        clas.img()    
    elif fun == 'file':
        
        clas.file_text()
