import { EmploymentType as NormalizedEmploymentType } from "@src/packages/offers/models";
import { Seniority } from "@src/packages/offers/models";
import {
  EmploymentTypeChoices,
  ExperienceLevelChoices,
  SkillLevel,
} from "./data-definitions/enums";

export const skillLevelToNormalizedSeniorityMap = {
  [SkillLevel.JUNIOR]: Seniority.JUNIOR,
  [SkillLevel.MID]: Seniority.MID,
  [SkillLevel.SENIOR]: Seniority.SENIOR,
  [SkillLevel.EXPERT]: Seniority.EXPERT,
};

export const experienceLevelToNormalizedSeniorityMap = {
  [ExperienceLevelChoices.JUNIOR]: Seniority.JUNIOR,
  [ExperienceLevelChoices.MID]: Seniority.MID,
  [ExperienceLevelChoices.SENIOR]: Seniority.SENIOR,
};

export const employmentTypeToNormalizedEmploymentTypeMap = {
  [EmploymentTypeChoices.B2B]: NormalizedEmploymentType.B2B,
  [EmploymentTypeChoices.MANDATE_CONTRACT]: NormalizedEmploymentType.MANDATE_CONTRACT,
  [EmploymentTypeChoices.PERMANENT]: NormalizedEmploymentType.PERMANENT,
};
