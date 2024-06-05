const importImages = (context) => {
    return context.keys().map(context)
}

const contextCamisas = require.context(`../../assets/images/ind/camisas`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextPantalones = require.context(`../../assets/images/ind/pantalones`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextChombas = require.context(`../../assets/images/ind/chombas`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextRemeras = require.context(`../../assets/images/ind/remeras`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextJeans = require.context(`../../assets/images/ind/jeans`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextSweaters = require.context(`../../assets/images/ind/sweaters`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextBuzos = require.context(`../../assets/images/ind/buzos`,false,/\.(png|JPG|jpe?g|svg)$/);
// const contextCamperas = require.context(`../../assets/images/ind/camperas`,false,/\.(png|JPG|jpe?g|svg)$/);
// const contextAmbos = require.context(`../../assets/images/ind/ambos`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextAccesorios = require.context(`../../assets/images/ind/accesorios`,false,/\.(png|JPG|jpe?g|svg)$/);

// const context = require.context(`../../assets/images/ind/camisas`,false,/\.(png|JPG|jpe?g|svg)$/);


export const imgPack = [
    {
        catName: 'camisas',
        images: importImages(contextCamisas),
    },
    {
        catName: 'pantalones',
        images: importImages(contextPantalones),
    },
    {
        catName: 'chombas',
        images: importImages(contextChombas),
    },
    {
        catName: 'remeras',
        images: importImages(contextRemeras),
    },
    {
        catName: 'jeans',
        images: importImages(contextJeans),
    },
    {
        catName: 'sweaters',
        images: importImages(contextSweaters),
    },
    {
        catName: 'buzos',
        images: importImages(contextBuzos),
    },
    // {
    //     catName: 'camperas',
    //     images: importImages(contextCamperas),
    // },
    // {
    //     catName: 'ambos',
    //     images: importImages(contextAmbos),
    // },
    {
        catName: 'accesorios',
        images: importImages(contextAccesorios),
    },
    // {
    //     catName: '',
    //     images: importImages(),
    // },
]

// const imgContext = require.context(`../../assets/images/ind/${name.toLowerCase()}`,false,/\.(png|jpe?g|svg)$/);