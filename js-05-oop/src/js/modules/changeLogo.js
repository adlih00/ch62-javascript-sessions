/** Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Ruta relativa, considerar como inicio la ubicación de este modulo
 */
const changeLogo = (imageRoute) => {
    const logoElement = document.getElementById("logo");

    if ( imageRoute && logoElement !== null ) {
        logoElement.src =`/assets/img/${imageRoute}`;
    } else {
        cconsole.warn( `Element with id "${ titleId }" not found.` );
    }
}
//Exportación nombrada
export {changeLogo}