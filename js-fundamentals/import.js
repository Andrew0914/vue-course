// importar un elmento con la destructuracion
import {cook} from './export'

console.log(cook())

// importar uno o mas elementos del grupo
import {clean, work} from './export'

console.log(clean(), work())

// importar el default
import mExports from './export'

console.log(mExports.dance())

/**
 * Este ejemplo sonlo es ilustrativo, ya que ne node requiere hacer unaconfiguración de modulos para que fiuncione y en el nrowser estar corriendo en un servidor
 * se vera aplicado mientras se trabaje con VUE directamente
 */