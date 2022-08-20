import {LocationAdapter} from '../../adapters';
import {HttpClientDef} from '../../http-client/types';
import { Location } from '../../../domain';

export type LocationRepository = (id: string, adapter: LocationAdapter, httpClient: HttpClientDef) => Promise<Location>;