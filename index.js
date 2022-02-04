let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
let descriptionHeader = document.createElement('h3')
let dogImage = document.createElement('img')
let dogDetails = document.createElement('div')
let para = document.createElement('p')
let time = document.createElement('h3')
let list = document.createElement('ul')
let l1 = document.createElement('li')
let l2 = document.createElement('li')
let l3 = document.createElement('li')

dogContent.setAttribute('class', 'dog-content')
dogImage.setAttribute('src', "./assets/rizzo.jpg")
dogImage.setAttribute('class', 'dog-image')
dogDetails.setAttribute('class', 'dog-details')

descriptionHeader.append('Description: ')
para.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
time.append('Feeding Times:')
l1.append("9:00 am")
l2.append("12:00 pm")
l3.append("5:00 pm")

dogContent.append(dogImage)
dogContent.append(dogDetails)
dogDetails.append(descriptionHeader)
dogDetails.append(para)
dogDetails.append(time)
list.append(l1,l2,l3)
dogDetails.append(list)

content.append(dogContent)

