let AppCntrlStates = {
  "base": class extends Silica.Controllers.FSM.State {
    onEnter(ctrl)
    {
      ctrl.mainActionResult = "Entered base state";
    }
    mainAction(ctrl)
    {
      ctrl.mainActionResult = "Base state says hi";
    }
  },
  "list": class extends Silica.Controllers.FSM.State {
    onEnter(ctrl)
    {
      ctrl.mainActionResult = "Entered list state";
    }
    mainAction(ctrl)
    {
      ctrl.addresses.push("New Address #" + ctrl.addresses.length)
      ctrl.mainActionResult = "Added new address to list";
    }
  },
  "details": class extends Silica.Controllers.FSM.State {
    onEnter(ctrl)
    {
      ctrl.mainActionResult = "Entered details state";
    }
    mainAction(ctrl)
    {
      ctrl.mainActionResult = "What should details do?";
    }
  }
};
// FSMExample
// AppCntrl is the root controller of FSMExample
//
class AppCntrl extends Silica.Controllers.FSM.Controller {
  // Constructor receives the element which specified this controller
  constructor(element) {
    super(element)
    this.name = "FSMExample";
    this.version = "1.0.0";
    this.addresses = ["102 NE 1st Ave, Delray Beach, FL 33444"];
    this.mainActionResult = "Main Action Not Run Yet";
  }

  /**
   * @override
   */
  static get states()
  {
    return AppCntrlStates;
  }

  transitionTo(el, state)
  {
    this.transition(state);
  }

  mainNavClass(el, parameter)
  {
    return parameter == this.currentState ? 'active' : '';
  }

  mainContent(el, parameter)
  {
    return parameter == this.currentState
  }

  showDetails(el, address)
  {
    this.currentAddress = address;
    this.transition("details");
  }

  mainAction()
  {
    this.handle("mainAction");
  }
}

export default AppCntrl;
