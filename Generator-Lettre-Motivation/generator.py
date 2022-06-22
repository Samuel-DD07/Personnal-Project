def ReadingFile():
    file = open('/Users/samueldorismond/Desktop/Projets /Personnal-Project/Generator-Lettre-Motivation/lettre_motication-base.txt', 'r')
    resultFile = file.read()
    file.close()

    return resultFile

def SearchWordToReplace(file):
    MyWordToReplace = {}
    word = ""

    for i in file:
        if(i != " " and i != "." and i != ","):
            word += i
        else:
            if "_" in word:
                MyWordToReplace[word] = "test"
            word = ""

    return MyWordToReplace

def modifTheLettreDeMotivation(dicoWord, file):
    for i in dicoWord :
        print("quel est ton :", i, "?")
        dicoWord[i] = str(input())
        file = file.replace(i, dicoWord[i])

    fileFinale = open('/Users/samueldorismond/Desktop/Projets /Personnal-Project/Generator-Lettre-Motivation/LettreDeMotivation/test.text', "w")
    fileFinale.write(file)
    fileFinale.close()

modifTheLettreDeMotivation(SearchWordToReplace(ReadingFile()), ReadingFile())
    









# textLettreMotivation = "Mon_Nom, Mon_Prénom"

# myInformation = {"Mon_Nom": "", "Mon_Prénom": ""}

# for i in myInformation :
#     myInformation[i] = str(input())
#     textLettreMotivation = textLettreMotivation.replace(i, myInformation[i])

# print(textLettreMotivation)