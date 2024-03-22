const importImages = (context) => {
    return context.keys().map(context)
}

const imgContextTest = require.context(`../../assets/images/ind/test`,false,/\.(png|JPG|jpe?g|svg)$/);
const contextCamisas = require.context(`../../assets/images/ind/camisas`,false,/\.(png|JPG|jpe?g|svg)$/);
// const contextPantalones = require.context(`../../assets/images/ind/pantalones`,false,/\.(png|JPG|jpe?g|svg)$/);

export const imgPack = [
    {
        catName: 'test',
        images: importImages(imgContextTest),
    },
    {
        catName: 'camisas',
        images: importImages(contextCamisas),
    },
    // {
    //     catName: '',
    //     images: importImages(),
    // },
]

// const imgContext = require.context(`../../assets/images/ind/${name.toLowerCase()}`,false,/\.(png|jpe?g|svg)$/);