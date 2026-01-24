import { Indiamedical } from "./Indiamedical";
import { UKMedical } from "./UKMedical ";
import { USmedical } from "./USmedical";
import { Medical } from "./Medical";



export class MaxHospital extends Medical implements USmedical, UKMedical, Indiamedical {
    min_free: number = 10;
    billing(): void {
        console.log('billing');
    }
    publicMediaNews(): void {
        console.log('publicMediaNews');
    }
    covid(): void {
        console.log('covid who');
    }
    emergency(): void {
        console.log('emergency');  //only one time emergency we can write no duplicate even its available all 3 interface.
    }
    // emergency(): void {
    //     throw new Error("Method not implemented.");
    // }
    // emergency(): void {
    //     throw new Error("Method not implemented.");
    // }
    gastro(): void {
        console.log("MaxHospital: Providing gastroenterology services");
    }
    ent(): void {
        console.log("MaxHospital: Providing ENT (Ear, Nose, Throat) services");
    }
    oncology(): void {
        console.log("MaxHospital: Providing oncology services");
    }


    pedia(): void {
        console.log("MaxHospital: Providing pediatric services");
    }


    dental(): void {
        console.log("MaxHospital: Providing dental services");
    }


    physio(): void {
        console.log("MaxHospital: Providing physiotherapy services");
    }


    cardio(): void {
        console.log("MaxHospital: Providing cardiology services");
    }


    opd(): void {
        console.log('max hospital opd services');
    }


    override research(): void {
        console.log('max research');
    }
}
