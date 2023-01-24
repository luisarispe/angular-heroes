<p align="center">
  <a href="https://ngrx.io/" target="blank"><img src="https://ngrx.io/assets/images/badge.svg" width="200" alt="Logo NGRX" /></a>
</p>

# <p align="center">NGRX STORE
</p>

## ¿Qué es NgRx?


NgRx es un marco para crear aplicaciones reactivas en Angular. NgRx proporciona bibliotecas para:

- Gestión del estado global y local.
Aislamiento de efectos secundarios para promover una arquitectura de componentes más limpia.
- Gestión de cobros de la entidad.
Integración con el Router Angular.
- Herramientas para desarrolladores que mejoran la experiencia del desarrollador al crear muchos tipos diferentes de aplicaciones.

### La librería que se usa en angular para poder gestionar la store es ngrx:

```
npm install @ngrx/store -save
```

## Elementos importantes de redux

### Acción
Una Acción es un evento que disparamos en nuestros componentes por la que solicitamos un nuevo estado como consecuencia de un evento de nuestro componente o de una acción del usuario.

- Ejemplo
```
// 1 - Importaciones
import { Action } from '@ngrx/store'
import { Task } from './../tasks/task.model'

// 2 - Definición del tipo de acción
export const ADD_TASK = 'Add task'

// 3 - Creación de la clase tipo AddTask
export class AddTask implements Action {
  readonly type = ADD_TASK
  constructor(public payload: Task) { }
}

// 4 - Exportación de la acción
export type Actions = AddTask
```

### Reducer
El reducer es el alma del patron Redux. Se encarga de proveer de un nuevo estado cada vez que se recibe una acción. El «nuevo estado» se refiere a una copia del estado existente con las modificaciones necesarias a realizar como consecuencia de la acción. No esta pensado, o al menos no se deberia, para realizar llamadas a servicios o cosas similares puesto que para ello están los mas que convenientes Efectos.

- Ejemplo

```
// 1 - Importaciones
import { Task } from './../tasks/task.model'
import * as TaskActions from './tasks.actions'

// 2 - Estado inicial
const initialState: Task = {
  name: 'First Task',
  state: 'Pending'
}

// 3 - Switch con las funciones puras
export function taskReducer(state: Task[] = [initialState], action: TaskActions.Actions) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
```


### Store
El Store, o almacenamiento se encarga de mantener la informacion que queremos este disponible para la aplicacion. Es inmutable, es decir, no podemos modificar y/o añadir nuevos elementos de forma directa sino que lo haremos a través del reducer, generalmente como consecuencia de una acción.

- Ejemplo

```
  // Definimos el observable:
  tasks: Observable<task[]>;
  constructor(
    private store: Store
  ) { 
    // Accedemos a la store:
    this.tasks = this.store.select('tasks');
  }

```
## Herramientas de redux


Una de las grandes ventajas del patrón REDUX es la facilidad de debuguear las aplicaciones, el equipo de ngrx ha creado una librería y una extensión para Google Chrome que hace mucho más sencillo el desarrollo y las pruebas de nuestras aplicaciones angular.

Para hacer uso de ella en primer lugar tenemos que instalar la librería:

```
npm install @ngrx/store-devtools --save
```

- Ejemplo para añadirlo en nuestro proyecto

```
import { StoreDevtoolsModule } from ‘@ngrx/store-devtools';

imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
```
Tras esto podemos añadir la extensión del navegador desde este enlace:

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Esta información esta disponible con mas detalle en las siguientes fuentes:

- [Pagina oficial](https://ngrx.io/docs)

- [Ejemplo de redux](https://digital55.com/blog/estructura-basica-store-ngrx/)






