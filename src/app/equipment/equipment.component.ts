import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  toolBeingEdited: string = null;

  equipment: string[] = [
    "Habitat dome",
    "Drones",
    "Food containers",
    "Oxygen tanks",
  ]
  constructor() { }

  ngOnInit() {
  }

  add (tool: string) {
    if (!this.equipment.includes(tool)) {
      this.equipment.push(tool);
    }
  }

  remove(tool: string) {
    let index = this.equipment.indexOf(tool);
    this.equipment.splice(index, 1);
  }

  edit (tool: string) {
    this.toolBeingEdited = tool;
  }

  save(tool: string, newTool: string) {
    tool = newTool;
    this.toolBeingEdited = null;
  }
}
