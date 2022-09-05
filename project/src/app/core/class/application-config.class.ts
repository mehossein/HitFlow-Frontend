import { Environment } from '../interface/env.interface';
import { IApplicationConfig } from '../interface/application-config.interface';
export class ApplicationConfig implements IApplicationConfig {
  environment!: Environment;
}
