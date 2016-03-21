import {bindable} from 'aurelia-framework';
import {getUuid} from '../../../helpers/helpers';

export class TextInput {
  @bindable label = '';
  @bindable value = '';
  @bindable maxlength = 100;
  @bindable placeholder = '';

  id = getUuid();
}
