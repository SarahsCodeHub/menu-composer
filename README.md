# Testaufgabe Sushi-Restaurant

## Autorin
Sarah Michaelsen
sarah.michaelsen@yahoo.com

## Projekthistorie :scroll:
`git log` :)

## Womit ist es gebaut :wrench:
- Vue 2
- Tailwind (CSS und UI)

## Dinge, die ich noch gemacht hätte, aber aufgrund der Zeit gelassen habe 
- einen ordentliches State-Management eingebaut (jetzt hält die App.vue alles zusammen)
- eine globale Axios Config
- eine vernünftige Übersetzung und nicht nur so harte Filter
- Editing existente Gerichte (hätte ich über die die Property an der Edit-Komponente gemacht, mit eben bereits befüllten Dish)
- Aktivieren/Deaktivieren der Gerichte
- Optimierung auf mobilem Layout (Obwohl das wahrscheinlich auch generell nicht der wichtigste Geschäftsvorfall ist. Ich würde davon ausgehen, dass die Kunden primär am Tablet/Desktop-Rechner mit der Software arbeiten)

## Dinge, die mir sofort auffallen und die bei einem Update auf Vue 3 beachtet werden müssten
- Vue 2 transition component verwendet
- EventBus wird so auch nicht mehr gemacht/unterstützt

## Ideen für weitere Feature
- drag'n'drop der cards in das Menü-Feld
- Export des Menüs als (themable) Widget und Pdf
- Accessability! (nur teilweise vorhanden, da es in den Tailwind-Ui-Komponenten teilweise schon vorhanden ist)



## :sparkles: Projekt anschalten und benutzen :sparkles:
### Project setup
```
npm install
```
#### Compiles and hot-reloads for development
```
npm run serve
```
#### Compiles and minifies for production
```
npm run build
```
#### Lints and fixes files
```
npm run lint
```
