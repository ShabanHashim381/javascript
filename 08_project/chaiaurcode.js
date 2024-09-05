const form = document.querySelector('form')
// this usercase will give you empty 
// const hieght = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

const height = parseInt(document.querySelector('#hieght').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = (document.querySelector('#results').value)

if(height === '' || height < 0 || isNaN(height)){
 results.innerHTML = `Please give a valid hieght ${height}`
}
})
