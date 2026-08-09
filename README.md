# UPUTSTVA 

U slučaju da želite pomoći u ispravci grešaka same aplikacije bez kreiranja korisničkog naloga na GitHub-u, prosledite relevantne informacije na:  
👉 **kabasti-ns &#64; proton . me** 

Za konkretan doprinos sa ulogom "Saradnik", istu mail adresu iskoristite za dostavljanje informacije GitHub korisničkog naloga da Vam se dodele prava.  

Za rad na izmenama i osvežavanju podataka same aplikacije sa lokala potrebno je instalisati sledeće programe:  
- **Git** https://git-scm.com
- **LibreOffice** https://www.libreoffice.org
- **Notepad++** https://notepad-plus-plus.org (ili kao zamena običan sistemski tekst editor npr. *Notepad*)

Bez ovih programa moguća je izmena na samom GitHub repozitorijumu, ali nikako nije preporučljivo. U tom slučaju koristi se website i ručno prepravljaju podaci.  

## Dokumenti podložni izmenama

- kabastiMZs.geojson
- translations.json
- version.json
- README.md

(ostali se ne menjaju i ostaju netaknuti)

### Savet: Za pregled uvećane slike iz dole opisanih koraka, Desni klik na sliku i izabrati *Open Link in New Tab*

<details>
  <summary>Preuzimanje dokumenata za obradu</summary>

Pokrenuti *terminal*/*PowerShell* ili *Command prompt* sa `Windows` + `R` -> CMD -> `Enter`  

**1. Korak:** Preuzimanje trenutnih dokumenata za obradu:
```bash
git clone -b draft --single-branch https://github.com/cvekiboy/Kabasti-NS.updates.git
```

**2. Korak:** Pozicioniranje unutar preuzetog repozitorijuma:  
```bash
cd Kabasti-NS.updates
```

**3. Korak:** Provera grane na kojoj se izvode izmene:  
```bash
git branch -a
```
*zvezdica treba da stoji na draft grani (zeleno)*

</details>

<details>
  <summary>Upload (dostava) dokumenata za upoređivanje izmena/osvežavanje</summary>

Pokrenuti **Terminal**/**PowerShell** ili **Command prompt** (CMD) `Windows` + `R` -> CMD -> `Enter`  

**1. Korak:** Pozicioniranje unutar preuzetog repozitorijuma:  
```bash
cd Kabasti-NS.updates
```

**2. Korak:** Provera koji dokumenti se razlikuju od trenutnih na GitHub-u:  
```bash
git status
```

**3. Korak:** Ukoliko su svi izlistani koji treba da se osveže, izvršiti *stage*-ovanje (pripremu) tih izmenjenih dokumenata:
```bash
git add --all
```

**4. Korak:** Upis verzije na koju se izmene odnose (npr. *v 2-2, 19.03 - 10.06.2026.*) gde:  
- (*v x-y,*) se odnosi na verziju *x+1* za **kabastiMZs.geojson**, dok *y+1* za **translations.json** dokument  
- (*dd.mm - dd.mm.gggg.*) predstavlja period nove akcije koju će aplikacija prikazivati  

```bash
git commit -m "v 2-2, 10.06 - 18.08.2026."
```

**5. Korak:** *Upload* dokumenata nazad na *draft* granu repositorijuma  
```bash
git push origin draft
```

</details>
<details>
  <summary>Izmena podataka u "kabastiMZs.geojson" dokumentu</summary>

**1. Korak:** Na https://geojson.io **[Import]**-ovati *kabastiMZs.geojson* dokument **[Open]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak01.jpg" target="_blank">
  <img src="images/geojson/korak01.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**2. Korak:** **[Export]**-ovati u CSV (Geometry representation -> Longitude & latitude columns) *KabastiMZs.csv* **[Export]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak02.jpg" target="_blank">
  <img src="images/geojson/korak02.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**3. Korak:** U LibreOffice Calc otvoriti **[Open]** *KabastiMZs.csv*   
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak03.jpg" target="_blank">
  <img src="images/geojson/korak03.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**4. Korak:** Postaviti podešavanja da tabela prikaže ispravan tekst i polja (ćelije)   
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak04.jpg" target="_blank">
  <img src="images/geojson/korak04.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**5. Korak:** Snimiti dokument kao **[Save as]** *KabastiMZs_izmene.csv* za rad na izmenama **[Save]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak05.jpg" target="_blank">
  <img src="images/geojson/korak05.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**6. Korak:** Nakon završenih ispravki datuma u M i N koloni (*date_from* i *date_to*) iskopirati te dve kolone sa datumimam i prebaciti u polja kolona O i P (*date_from:sr* i *date_to_sr*) i prilagoditi broj nedelje u godini koji se podudara sa tim datumima u koloni C (*week*).

Dodati novu stranicu (Add new sheet) sa **[+]** ikonicom na dnu (Sheet2)  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak06.jpg" target="_blank">
  <img src="images/geojson/korak06.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**7. Korak:** Kopirati selektovane M i N kolone **[Edit -> Copy]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak07.jpg" target="_blank">
  <img src="images/geojson/korak07.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**8. Korak:** Nalepiti kopirane M i N kolone u A i B kolonu nove stranice (Sheet2) **[Edit -> Paste]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak08.jpg" target="_blank">
  <img src="images/geojson/korak08.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**9. Korak:** Obrisati kompletan 1. red (Selektovati ga pa desni klik) **[Delete Rows]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak09.jpg" target="_blank">
  <img src="images/geojson/korak09.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**10. Korak:** Iskopirati formulu u C1 ćeliju za formatiranje datuma na mađarskm jeziku:  
`=MID(A1,7,4) & "." & MID(A1,4,2) & "." & MID(A1,1,2)`   (Selektovati ga pa desni klik) **[Paste]**   
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak10.jpg" target="_blank">
  <img src="images/geojson/korak10.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**11. Korak:** Stisnuti `Enter` ili ✔️ [Accept]  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak11.jpg" target="_blank">
  <img src="images/geojson/korak11.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**12. Korak:** Proverit format datuma, a u slučaju Greške (Error 508) koristit sledeću formulu:  
`=MID(A1;7;4) & "." & MID(A1;4;2) & "." & MID(A1;1;2)`  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak12.jpg" target="_blank">
  <img src="images/geojson/korak12.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**13. Korak:** Preslikati formulu na sledeću kolonu D (ćelija D1) povlačenjem donjeg desnog krstića ćelije C1 u desno  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak13.jpg" target="_blank">
  <img src="images/geojson/korak13.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**14. Korak:** Preslikati formulu na sve ćelije kolona C i D povlačenjem donjeg desnog krstića ćelije D1 (na dole) dok je i C1 ćelija selektovana  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak14.jpg" target="_blank">
  <img src="images/geojson/korak14.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**15. Korak:** Kopirati izformatirane ćelije kolona C i D  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak15.jpg" target="_blank">
  <img src="images/geojson/korak15.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**16. Korak:** U *KabastiMZs* stranici selektovati ćelije kolona Q i R (bez prvog reda) pa **[Edit -> Paste Special -> Paste Only Text]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak16.jpg" target="_blank">
  <img src="images/geojson/korak16.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**17. Korak:** Ponoviti ovu istu radnju za slovački i engleski format datuma koristeći E i F (odnoso G i H) kolone i formule: 

- Slovački  
`=MID(A1,1,2) & "." & MID(A1,4,2) & "." & MID(A1,7,4)`   
ili  
`=MID(A1;1;2) & "." & MID(A1;4;2) & "." & MID(A1;7;4)`  

- Engleski  
`=MID(A1,1,2) & "/" & MID(A1,4,2) & "/" & MID(A1,7,4)`  
ili  
`=MID(A1;1;2) & "/" & MID(A1;4;2) & "/" & MID(A1;7;4)`   
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak17.jpg" target="_blank">
  <img src="images/geojson/korak17.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**18. Korak:** Preslikati formule u sve ćelije E i F (odnoso G i H) kolone  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak18.jpg" target="_blank">
  <img src="images/geojson/korak18.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**19. Korak:** Iskopirane formatirane datume iz druge stranice prebaciti u S i T (odnoso U i V) kolone i zameniti postojeće sa novima **[Edit -> Paste Special -> Paste Only Text]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak19.jpg" target="_blank">
  <img src="images/geojson/korak19.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**20. Korak:** Nakon završenih izmena i sređene prve stranice, obrisati drugu koju smo koristili za formatiranje datuma sa desnim klikom na njoj i **[Delete Sheet]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak20.jpg" target="_blank">
  <img src="images/geojson/korak20.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**21. Korak:** Potvrditi brisanje sa **[Yes]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak21.jpg" target="_blank">
  <img src="images/geojson/korak21.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**22. Korak:** Snimiti *KabastiMZs_izmene.csv* **[Save]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak22.jpg" target="_blank">
  <img src="images/geojson/korak22.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**23. Korak:** Na https://geojson.io obrisati prethodne tačke **[Delete]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak23.jpg" target="_blank">
  <img src="images/geojson/korak23.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**24. Korak:** Na https://geojson.io [Import]-ovati *KabastiMZs_izmene.csv* dokument **[Open]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak24.jpg" target="_blank">
  <img src="images/geojson/korak24.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**25. Korak:** Parametri: 
- File format: CSV
- Kind: Coordinates
- Delimiter: "," Latitude column: latitude -> Longitude column: longitude
- Infer types (štiklirano)
- **[Import]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak25.jpg" target="_blank">
  <img src="images/geojson/korak25.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**26. Korak:** **[Export]**-ovati u GeoJSON sa *Indent & format* **[Export]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak26.jpg" target="_blank">
  <img src="images/geojson/korak26.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**27. Korak:** Snimiti ga kao stari (pregaziti sa novim) *kabastiMZs.geojson* dokumentom **[Save]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak27.jpg" target="_blank">
  <img src="images/geojson/korak27.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**28. Korak:** Potvrditi sa **[Yes]**  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak28.jpg" target="_blank">
  <img src="images/geojson/korak28.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

</details>

<details>
  <summary>Korigovanje pozicije tačke</summary>

**1. Korak:** Pozicionirati se na konkretnu tačku  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak29.jpg" target="_blank">
  <img src="images/geojson/korak29.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**2. Korak:** Kliknuti konkretnu tačku  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak30.jpg" target="_blank">
  <img src="images/geojson/korak30.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**3. Korak:** Kliknuti i držeći je povući na željenu (tačnu) poziciju  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak31.jpg" target="_blank">
  <img src="images/geojson/korak31.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**4. Korak:** Ponovnim klikom na konkretnu tačku ona pobeli i prikaže koordinate  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak32.jpg" target="_blank">
  <img src="images/geojson/korak32.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**5. Korak:** Za dodatnu proveru može se koristiti druga pozadinska mapa (Outdors)  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak33.jpg" target="_blank">
  <img src="images/geojson/korak33.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**6. Korak:** Za dodatnu proveru može se koristiti druga pozadinska mapa (Standard)  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak34.jpg" target="_blank">
  <img src="images/geojson/korak34.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

**7. Korak:** Za dodavanje novih tačaka koristi duplikat postojeće i vršiti izmene na njoj  
<a href="https://github.com/cvekiboy/Kabasti-NS.updates/blob/uputstva/images/geojson/korak35.jpg" target="_blank">
  <img src="images/geojson/korak35.jpg" width="200" alt="Ctrl+Klik za uvećanje">
</a>
<br>
<br>

</details>
<details>
  <summary>Izmena podataka u "translations.json" dokumentu</summary>

Koristiti Notepad++ i izvršiti sledeće izmene:  
- godišnje doba
- datume (od - do)
- link ka zvaničnom planu  

(na sva četri jezika)  

</details>
<details>
  <summary>Izmena brojeva verzija u "version.json" dokumentu</summary>

Koristiti Notepad++ i izvršiti sledeće izmene:  
- "geojsonVersion": *x+1*
- "translationsVersion": *y+1*

</details>

<details>
  <summary>Izmene u "README.md" dokumentu</summary>

Koristiti Notepad++ i izvršiti sledeće izmene:  
- Ažurirano: *Datum*
- Opis: *link (veza) ka zvaničnom planu*

</details>

### Zahvaljujemo se na pruženoj pomoći!


