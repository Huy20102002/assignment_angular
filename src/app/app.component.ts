import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Array<any> = [];
  emenies: Array<any> = [];
  formHero: any = {
    id: "",
    name: "",
    avatar: "",
    gender: "Nữ"
  };
  formEmenies: any = {
    id: "",
    name: "",
    avatar: "",
    healthy: "",
    armor: ""
  };
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3001/heroes")
      .subscribe(data => {
        this.heroes = data;
      })
  }

  remove(hero: any) {
    this.http.delete<any>(`http://localhost:3001/heroes/${hero.id}`)
      .subscribe(data => {
        this.heroes = this.heroes.filter(item => item.id != hero.id);
      })

  }
  removeEmines(emenies:any){
    this.http.delete<any>(`http://localhost:3001/enemies/${emenies.id}`)
    .subscribe(data=>{
      this.emenies = this.emenies.filter(item=>item.id!=emenies.id);
    })
  }
  submitForm() {
    const newHero = { ...this.formHero };
    if (newHero.id == "") {
      this.http.post<any>("http://localhost:3001/heroes", newHero)
        .subscribe(data => {
          this.heroes.push(data);
        })
    } else {
      this.http.put<any>(`http://localhost:3001/heroes/${newHero.id}`, newHero)
        .subscribe(data => {
          let index = -1;
          this.heroes.forEach((item, i) => {
            if (item.id == newHero.id) {
              index = i;
            }
          })
          this.heroes[index] = data;
        });
    }
    this.formHero = {
      code: "",
      name: "",
      avatar: "",
      gender: "nữ"
    };
  }
  submitFormEmenies() {
    const newEmenies = { ...this.formEmenies };
    if (newEmenies.id == "") {
      this.http.post<any>("http://localhost:3001/enemies", newEmenies)
        .subscribe(data => {
          this.emenies.push(data);
        })
    } else {
      this.http.put<any>(`http://localhost:3001/enemies/${newEmenies.id}`, newEmenies)
        .subscribe(data => {
             let index=-1;
             this.emenies.forEach((item,i)=>{
               if(item.id==newEmenies.id){
                 index=i;
               }
             })
             this.emenies[index]=data;
        });
    }
    this.formEmenies={
      id: "",
      name: "",
      avatar: "",
      healthy: "",
      armor: ""
    }
  }
  update(item: any) {
    this.formHero = { ...item };
  }
  updateEmines(item:any){
    this.formHero ={...item};
  }
}