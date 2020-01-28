

# Krav
Tips på hemuppgift.
Gör en ToDO-list.
Använd bootstrap@3


## Modelldata
ToDoItem

## Komponenter:
- TodoAdd  (Add New)
	- header, description
- ToDoItem
- ToDoList
	- with items, 
	- ShowDetails-button, Edit-button, Delete-button
	- checkbox => done, markera med strike-out och färga texten grön

# Att öva på
- Använd property-binding för modelldata när listan genereras.
- Använd ngStyle för att binda style till property villkorligt.
- Använd ngIf för att visa details (ShowDetails)
- Använd property-binding för disabled på knappen Add Item ifall fältet name är tomt (description kan vara optional).

# Service Provider med DI av HTTP client
- Prova att göra en service-provider som hämtar fake-data i JSON format.
- Läs data från databas. Kör en nodejs express...?

---
# Azure Deployment
Prova att deploya i Kubernetes cluster på Azure DevOps.
- Bygg projekt.
- Hämta Dockerfile för nginx.
- Lägg in AzureSetup.yaml-filen och konfigurera den.
- Skapa pipeline med npm install angular, npm install, npm build.
- Gör releasen, och glöm ej kubectl konfigurationen.

