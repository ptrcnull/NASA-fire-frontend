import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fire-list',
  templateUrl: './fire-list.component.html',
  styleUrls: ['./fire-list.component.scss']
})
export class FireListComponent implements OnInit {
  fires = [
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: false,
      isFire: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartamentDescription: '',
      arePeople: false,
      isWood: false,
      isBuilding: false,
      isHazardousMaterial: false,
      isElectricity: false,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    },
    {
      startDate: '01/02/2019',
      fireNotificationApproveCounter: '',
      fireTeam: true,
      isFire: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?',
      fireDepartmentDescription: '',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isHazardousMaterial: true,
      isElectricity: true,
      address: 'potulicka 12/11'
    }]

  constructor () {
  }

  ngOnInit () {
  }

}
