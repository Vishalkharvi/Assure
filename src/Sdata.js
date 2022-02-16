import back from './Images/back.jpg';
import background from './Images/background.png';


const Sdata = [ 
    {id:0,order:1,image:back, title:'Virtual AI', content:'Code for this project is below',description:`This is a small project where 
    a personal assistant will get ready to answer to your commands. For example if you want to find the time, you can ask the assistant 'hey jarvis what is the time' 
    Also if you want to find some information on wikipedia , you can order assistant. command will be 'Data' wikipedia. For Example Sachin tendulkar wikipedia.
    
     Before that should install some dependency and they are :
     pip install wikipedia
     pip install pyttsx3
     pip install speech-recognition
     pip install webbrowser`,
     code:`
     
     import csv
with open('enjoysport.csv', 'r') as f:
    reader = csv.reader(f)
    data = list(reader) 
print("Training data\n")
for row in data:
    print(row)

attr_len = len(data[0])-1
h = ['0']*attr_len
print("h=",h)
k=0

print("\nThe Hypothesis are\n")
for row in data:
    
    if row[-1] == 'yes':
        j = 0
        for col in row:
            if col != 'yes':
                if col != h[j] and h[j] == '0':
                    h[j] = col
                elif col != h[j] and h[j] != '0':
                    h[j] = '?'
                        
            j = j + 1
    print("h",k,"=",h) 
    k=k+1
        
print('\nMaximally Specific Hypothesis: \n',"h",k-1,"=", h)

------------------------------------------------------------------------------------------------
222

import csv
with open('sheet2.csv', 'r') as f:
    reader = csv.reader(f)
    data = list(reader)
    
print("Training data")
for row in data:
    print(row)
print("--------------------------------------")

attr_len=len(data[0])-1

S = ['0']*attr_len
G = ['?']*attr_len

temp=[] 


l=0
print("The Hypothesis are")
print("S",l," = ",S)
print("G",l," = ",G)
print("--------------------------------------")
for row in data:
    if row[-1] == 'yes':
        j = 0
        for col in row:
            if col != 'yes':
                if col != S[j] and S[j] == '0':
                    S[j] = col
                elif col != S[j] and S[j] != '0':
                    S[j] = '?'
            j = j + 1
        
        for j in range(0,attr_len):
            for k in temp:
                if k[j] != S[j] and k[j] != '?':
                    temp.remove(k)
    if row[-1]=='no':
        j = 0
        for col in row:
            if col != 'no':
                if col!= S[j] and S[j] != '?':
                    G[j]=S[j]
                    temp.append(G)
                    G=['?']*attr_len
            j =j + 1
    print("S",l," = ",S) 
    if len(temp)==0:
        print("G",l," = ",G)
    else:
        print("G",l," = ",temp)
    print('-----------------------------------')
    l=l+1
    
    
    ----------------------------------------------------------------------------------------
    
     `
},
    {id:1,order:2,image:background, title:'OCR', content:'Code for this project is below',description:`This is small project
    where contents from pages are extracted and recognized, and this recognized words are spoken by google text to speech engine.Use of this 
    project is that, some languages dont have their own scripts,like Konkani.But konkani jokes and stories are written in Hindi,Devanigiri, so 
    people can hear to google text to speech engine in konkani itself.
    
     Before that should install some dependency and they are :
     pip install tkinter
     pip install PIL
     pip install pytesseract`,
     code:`
from tkinter import *
from PIL import ImageTk,Image
from tkinter import filedialog
import pytesseract as py
py.pytesseract.tesseract_cmd= r'C:\Users\vishalkharvi\Downloads\tesseract.exe'

win=Tk()
win.title("OCR")
win.geometry("500x600")
win.resizable(width=True, height=True)

label1=Label(win, text="P-OCR", font=("times new roman",25, "bold"),bg="blue",fg="red")
label1.pack(side=BOTTOM, fill=BOTH, expand="yes")

def open_file():
    file=filedialog.askopenfile(title="select")
    return file

def open_():
    path=open_file()
    image_path=path.name
    splitted_path=image_path.split("/")
    backslash="\\\\"
    norm_path=backslash.join(splitted_path)
    opened_image=Image.open(norm_path)
    Texts_from_image=py.image_to_string(opened_image,lang='kan')
    extracted_text_from_image=""
    extracted_text_from_image= extracted_text_from_image+str(Texts_from_image)

    win1=Tk()
    win1.geometry("500x600")
    Label(win1, text="extracted texts").pack(side=TOP)
    T=Text(win1)
    T.delete(1.0,END)
    T.insert(1.0,extracted_text_from_image)
    T.pack()


button=Button(win, text=" select", font=("arial",25,"bold"),command=open_)
button.pack()


win.mainloop()
` },
    
    {id:2,order:3,image:back, title:'Online Video Streamer', content:'Code for this project is below',description:'',code:'' },
    {id:3,order:4,image:back, title:'Amazon Prime Video', content:'Code for this project is below',description:'',code:'' },
    {id:4,order:5,image:back, title:'Hotstar', content:'Code for this project is below',description:'',code:'' },
    {id:5,order:6,image:back, title:'Hotstar', content:'Code for this project is below',description:'',code:'' },


]

export default Sdata;
