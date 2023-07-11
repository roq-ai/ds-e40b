import { FileInterface } from 'interfaces/file';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    file?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  organization_id?: string;
  user_id?: string;
}
