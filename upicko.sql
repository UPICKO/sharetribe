alter table listings add column upicko_opening_hours text;

alter table listings add column upicko_season_status INT;
alter table listings add column upicko_season_info text;
alter table listings add column upicko_access_fee varchar(255);
alter table listings add column upicko_unit_fee varchar(255);
alter table listings add column upicko_facility_info text;
alter table listings add column upicko_brief_info text;

update listings set upicko_season_status = 1;
alter table listings MODIFY upicko_season_status INT NOT NULL DEFAULT 1;

