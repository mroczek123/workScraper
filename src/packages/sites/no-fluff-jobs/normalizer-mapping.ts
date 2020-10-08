import { EmploymentType, Seniority } from "@src/packages/offers/models";
import { SeniorityChoices, TypeChoices } from "./data-definitions/enums";

export const contractTypeToNormalizedEmploymentTypeMap = {
  [TypeChoices.B2B]: EmploymentType.B2B,
  [TypeChoices.PERMANENT]: EmploymentType.PERMANENT,
  [TypeChoices.ZLECENIE]: EmploymentType.MANDATE_CONTRACT,
  [TypeChoices.UOD]: EmploymentType.UOD,
};

export const seniorityToNormalizedSeniorityMap = {
  [SeniorityChoices.TRAINEE]: Seniority.TRAINEE,
  [SeniorityChoices.JUNIOR]: Seniority.JUNIOR,
  [SeniorityChoices.MID]: Seniority.MID,
  [SeniorityChoices.SENIOR]: Seniority.SENIOR,
  [SeniorityChoices.EXPERT]: Seniority.EXPERT,
};
