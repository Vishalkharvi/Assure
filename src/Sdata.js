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
     
     import datetime
# from __future__ import unicode_literals
import pyttsx3
import speech_recognition as sr
import webbrowser
import wikipedia
import os
import requests
import youtube_dl
import urllib
import shutil
import calendar
import turtle
import time
import wolframalpha
# import PyAudio

engine=pyttsx3.init()
# voices=engine.getProperty('voices')
# engine.setProperty(voices,voices[0].id)
# rate=engine.getProperty('rate')
# engine.setProperty('rate',145)
# voices=engine.getProperty('voices')
# engine.setProperty('voice',voices[1].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def WishMe():
    hour= int(datetime.datetime.now().hour)
    if hour>0 and hour <12:
        speak("i am jarvis")
        speak("good morning how can i help u")
        print("good morning boss how can i help u")
    
    elif hour>12 and hour<18:
        speak("i am jarvis ")
        speak("good afternoon bosss")
        speak("how can i help u")
        print("good afternoon boss how can i help u")
    else:
        speak("i am jarvis sir")
        speak("hey boss how can i help you")
        #print("hey boss how cann i help")
        
        
def takeCommand():
    r=sr.Recognizer()
    with sr.Microphone() as source:
        print("listening...")
        r.pause_threshold=1
        audio=r.listen(source)
    try:
        print("recognising...")
        query=r.recognize_google(audio, language='en-in')
        print(f"user said : {query}\n")
    except Exception as e:
        speak("sorry for the inconvinience, can you please say it again")
        print("sorry for the inconvinience, can you please say it again")
        return "none"
    return query

def youtube():
    try:
        youtube_dl.YoutubeDL().download([videolink])
    except Exception as e:
        print(e)
        print("the link isnt valid")
        speak("the link isnt valid")

def NewsFromBBC():  
    main_url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=fc26cd03eed54441a0bada3f90b0c5c5"
    open_bbc_page = requests.get(main_url).json()
    article = open_bbc_page["articles"] 
    results = {}
    for ar in article: 
        results[ar["title"]]=ar["description"]
    for title,description in results.items():
        print(f"'{title}'--> '{description}'")
        speak(f"'{title}' -->'{description}'")
        
def askme(ques):

    appid="4TVP4Y-7XYRKR9GJY"
#     q=input("question")
    client=wolframalpha.Client(appid)
    result=client.query(ques)
    kk=result.success
    if kk=='true':
        for i in result.results:
            print(i.text)
            speak(i.text)
            
    else:
        print("Sorry, I couldnt find the answer, Try someother question")
        

def calendar(year):
    year=int(input("enter the year: "))
    a=calendar.calendar(year)
    print(a)

def wishing():
    speak("Wish you happy birthday Ajay")
    
    
def bday():
    filename=open("birthdays.txt","r")
    today=time.strftime("%d%m")
    for line in filename:
        if today in line:
            line=line.split()
            print(f" Today is {line[1]} {line[2]} birthday, Be the first to wish him. And convey my wishes too")
            speak(f" Today is {line[1]} {line[2]} birthday, Be the first to wish him. And convey my wishes too")
        else:
            print("No other birthday's today, Sir")
            speak("No other birthday's today, Sir")
            break

    
if __name__=="__main__":
    WishMe()
    while True:
        query= takeCommand().lower()
        
        if 'wikipedia' in query:
            speak("searching wikipedia boss")
            query=query.replace("wikipedia","")
            result=wikipedia.summary(query, sentences=2)
            speak("boss, according to wikipedia")
            print(result)
            speak(result)
            
        elif 'open google' in query:
            webbrowser.open('www.google.com')
        elif 'open youtube' in query:
            webbrowser.open('www.youtube.com')
        elif "fetch news" in query:
            NewsFromBBC()
        elif "download video" in query:
            videolink=input("enter the link from Youtube to download that video")
            youtube()
        elif "open calendar" in query:
            calendar()
        elif "whose birthday is today" in query:
            bday()   
            
            
        elif "hey google" in query:
            speak("Hey i am google, wishing you many more happy returns of the day Ajay")
            #print("Hey I am google, wishing you many more happy returns of the day")
        elif "bye"  in query:
            print("see you soon boss, i Love you 3000")
            speak("see you soon boss, i Love you 3000")
            break
            
        else:
            print("vb")
            #ques=input("Ask me any general Knowledge question, I will Try to answer you")
            askme(query) 
     `
},
    {id:1,order:2,image:background, title:'OCR', content:'Code for this project is below',description:'',code:'' },
    {id:2,order:3,image:back, title:'Online Video Streamer', content:'Code for this project is below',description:'',code:'' },
    {id:3,order:4,image:back, title:'Amazon Prime Video', content:'Code for this project is below',description:'',code:'' },
    {id:4,order:5,image:back, title:'Hotstar', content:'Code for this project is below',description:'',code:'' },
    {id:5,order:6,image:back, title:'Hotstar', content:'Code for this project is below',description:'',code:'' },


]

export default Sdata;