import { Component } from '@angular/core';
import { Platform, AnimationController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private animationCtroller: AnimationController
  ) {
    this.initializeApp();
  }

  myCustomPageTransition = ((baseEl: any, opts?: any) => {
    var anim = this.animationCtroller.create()
      .addElement(opts.leavingEl)
      .duration(2000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity','1','0.0')
    return anim
  });

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
