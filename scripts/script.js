
const baseColor = document.querySelector('#base-color')
const colorScheme = document.querySelector('#color-scheme')
const generateBtn = document.querySelector('#generate-btn')
const generatedColors = document.querySelector('#generated-colors')

generateBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor.value.substring(1)}&count=4&mode=${colorScheme.value}`)
        .then(response => response.json())
        .then(data => {
            let count = 1
            const colors = data.colors.map(color => {
                count++
                return `
                    <div class="color-container">
                        <div class="color color${count}" id="color${count}" style="background-color: ${color.hex.value}"></div>
                        <p class="color-value">${color.hex.value}</p>
                    </div>
                `
            }).join('')
            
            const seedColor = `
                <div class="color-container">
                    <div class="color color1" id="color1" style="background-color: ${baseColor.value}"></div>
                    <p class="color-value">${baseColor.value.toUpperCase()}</p>
                </div>
                `
    
            generatedColors.innerHTML = seedColor + colors
        })
})

