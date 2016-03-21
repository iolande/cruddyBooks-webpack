import {bindable} from 'aurelia-framework';
import {getUuid} from '../../../helpers/helpers';

export class SearchInput {
  @bindable label = '';
  @bindable value = '';
  @bindable placeholder = '';
  @bindable buttonText = '';

  id = getUuid();
}
