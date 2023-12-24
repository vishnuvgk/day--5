import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  districts:any=[
    {
      id:1,
      title:"Trivandrum",
      image:"https://www.keralabackwater.com/blog/wp-content/uploads/2017/04/kovalam-beach.jpg",
      description:"Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title:"Kollam",
      image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
      description:"Kollam has been the centre of cashew industry in Kerala. Having hundreds of working cashew factories in the district, Kollam still continues to be the largest processed cashew exporter in India."
    },
    {
      id:3,
      title:"Pathanamthitta",
      image:"https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Alleppey-Kerala.jpg",
      description:"The district headquarters is noted for communal and cultural harmony. Situated near the Western Ghats and bordered by the hills, Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes."
    },
    {
      id:4,
      title:"Kottayam",
      image:"https://www.clubmahindra.com/blog/media/section_images/15kottayam-d72ed3ff1b8af6f.webp",
      description:"Most of India's natural rubber originates from the acres of well-kept plantations of Kottayam, also home to the Rubber Board. Kottayam is also called as “Akshara Nagari” which means the “city of letters” considering its contribution to print media and literature."
    },
    {
      id:5,
      title:"Eranakulam",
      image:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg",
      description:"Popularly known as 'Queen of the Arabian Sea', it is a flourishing port city showcasing a rich blend of mesmerising natural beauty and vibrant culture. It is the crowning jewel of the state's tourism landscape."
    },
    {
      id:6,
      title:"Wayanad",
      image:"https://www.savaari.com/blog/wp-content/uploads/2021/08/8.-chembra-peak-trek-1024x577.jpg",
      description:"This area is famous for its large amount of camping and trekking trails, breathtaking waterfalls, caves, bird watching sites, flora, fauna and an overall plethora of magnificent sights. This area has been a tourist favourite over the years."
    },
    {
      id:7,
      title:"Kasargod",
      image:"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Hosdurg-Fort-Kasaragod-Kerala.jpg?resize=1200%2C802&ssl=1",
      description:"The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches."
    }
  ];

  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.getDetails();
  }
  id:any;
  data:any;

  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.districts.filter((d:any) => d.id == this.id)
  }

 

}
