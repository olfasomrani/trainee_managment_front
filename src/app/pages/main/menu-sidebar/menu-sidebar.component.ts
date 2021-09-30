import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';


@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
    role;
    ch = "";
    username;

    @ViewChild('mainSidebar', { static: false }) mainSidebar;
    @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();


    ngOnInit() {

        this.username = localStorage.getItem("username");
        this.role = localStorage.getItem("role");
        if (this.role == "admin") {
            this.ch = `

          
            <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href='/' class="nav-link">
                    <i class="fa fa-home" aria-hidden="true"></i>
                        <p>Acceuil</p>
                    </a>
                </li>
                <li class="nav-item">
                <a href='/admin' class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i>
                    <p>Nouveau Admin </p>
                </a>
            </li>

                <li class="nav-item">
                    <a href='/encadrants' class="nav-link">
                    <i class="fa fa-user" aria-hidden="true"></i>
                        <p>Encadrant</p>
                    </a>
                </li>

                <li class="nav-item">
                <a href='/stagiaires' class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i>
                    <p>Stagiaires</p>
                </a>
                </li>

                <li class="nav-item">
                <a href='/stage' class="nav-link">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                    <p>Information Stagiaires</p>
                </a>
                </li>
             
                <li class="nav-item">
                <a href='/acceuil' class="nav-link">
                 <i class="fa fa-file" aria-hidden="true"></i>
                    <p>Actualité</p>
                </a>
                </li>
                <li class="nav-item">
                <a href='/acceuil' class="nav-link">
                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                    <p>TimeSheet</p>
                </a>
                </li>


            </ul>
  

            
            `;
        }


        if (this.role == "encadrant") {
            this.ch = `

           
            <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
        >
            <!-- Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library -->
            <li class="nav-item">
                <a href='/acceuilEncadrant' class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>Acceuil</p>
                </a>
            </li>

        

            <li class="nav-item">
            <a href='/client' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Etudiant</p>
            </a>
            </li>

            
            <li class="nav-item">
            <a href='/acceuil' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Actualité</p>
            </a>
            </li>
         
            <li class="nav-item">
            <a href='/stage' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Offre Stage</p>
            </a>
            </li>

            <li class="nav-item">
            <a href='/freelance' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Offre Freelance</p>
            </a>
            </li>

            <li class="nav-item">
            <a href='/course' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Course</p>
            </a>
            </li>

            <li class="nav-item">
            <a href='/file' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Fichier Etudicatif</p>
            </a>
            </li>


        </ul>
            
            `;
        }

        if (this.role == "stagiaire") {
            this.ch = `

           
            <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
        >
            <!-- Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library -->
            <li class="nav-item">
                <a href='/acceuilstagiaire' class="nav-link">
                <i class="fa fa-home" aria-hidden="true"></i>
                <p>Acceuil</p>
                </a>
            </li>

            <li class="nav-item">
            <a href='/addinformations' class="nav-link">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <p>Ajouter Information </p>
            </a>
            </li>
          
            
            <li class="nav-item">
            <a href='/acceuile' class="nav-link">
            <i class="fa fa-file" aria-hidden="true"></i>
            <p>Actualité</p>
            </a>
            </li>
         
            <li class="nav-item">
            <a href='/stagee' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Offre Stage</p>
            </a>
            </li>


            <li class="nav-item">
            <a href='/' class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Meet</p>
            </a>
            </li>


        </ul>
            
            `;
        }



    }

    ngAfterViewInit() {
        this.mainSidebarHeight.emit(
            this.mainSidebar.nativeElement.offsetHeight
        );
    }
}
